import type { MediaItem, LogoAsset } from '../types';

export interface ZipSource {
        url: string;
        name?: string;
}

export interface ZipDownloadOptions {
        archiveName: string;
        filenamePrefix?: string;
}

const MIME_EXTENSION_MAP: Record<string, string> = {
        'image/jpeg': 'jpg',
        'image/png': 'png',
        'image/gif': 'gif',
        'image/webp': 'webp',
        'image/svg+xml': 'svg',
        'image/avif': 'avif',
        'image/bmp': 'bmp',
        'image/tiff': 'tiff',
        'image/x-icon': 'ico',
        'image/vnd.microsoft.icon': 'ico',
        'application/pdf': 'pdf',
        'application/zip': 'zip',
        'application/octet-stream': 'bin',
        'video/mp4': 'mp4',
        'video/webm': 'webm'
};

function extractExtensionFromUrl(url: string): string | undefined {
        const sanitized = url.split(/[?#]/)[0];
        const segments = sanitized.split('.');
        if (segments.length <= 1) {
                return undefined;
        }
        const ext = segments.pop();
        return ext ? ext.toLowerCase() : undefined;
}

function extensionFromBlob(blob: Blob, fallbackUrl: string): string {
        const mapped = MIME_EXTENSION_MAP[blob.type];
        if (mapped) {
                return mapped;
        }
        const fromUrl = extractExtensionFromUrl(fallbackUrl);
        return fromUrl ?? 'bin';
}

export function slugifyForFilename(input: string, fallback: string = 'download'): string {
        const normalized = typeof input.normalize === 'function' ? input.normalize('NFKD') : input;
        const ascii = normalized.replace(/[\u0300-\u036f]/g, '');
        const slug = ascii
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-+|-+$/g, '')
                .trim();
        return slug || fallback;
}

function ensureZipExtension(filename: string): string {
        return filename.toLowerCase().endsWith('.zip') ? filename : `${filename}.zip`;
}

function triggerBrowserDownload(blob: Blob, filename: string) {
        const href = URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.href = href;
        anchor.download = filename;
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
        URL.revokeObjectURL(href);
}

async function fetchAsset(url: string): Promise<Blob> {
        const response = await fetch(url);
        if (!response.ok) {
                throw new Error(`Failed to fetch asset ${url} (${response.status})`);
        }
        return response.blob();
}

export async function downloadAssetsAsZip(sources: ZipSource[], options: ZipDownloadOptions): Promise<boolean> {
        if (typeof window === 'undefined' || typeof document === 'undefined') {
                return false;
        }

        if (sources.length === 0) {
                return false;
        }

        const { default: JSZip } = await import('jszip');
        const zip = new JSZip();
        const filenamePrefix = slugifyForFilename(options.filenamePrefix ?? options.archiveName, 'asset');

        const results = await Promise.allSettled(
                sources.map(async (source, index) => {
                        const blob = await fetchAsset(source.url);
                        const extension = extensionFromBlob(blob, source.url);
                        const baseName = slugifyForFilename(source.name ?? `${filenamePrefix}-${index + 1}`, filenamePrefix);
                        const finalName = `${baseName}.${extension}`;
                        zip.file(finalName, blob);
                })
        );

        const successful = results.filter((result) => result.status === 'fulfilled');
        if (successful.length === 0) {
                return false;
        }

        const archive = await zip.generateAsync({ type: 'blob' });
        const archiveName = ensureZipExtension(slugifyForFilename(options.archiveName, 'archive'));
        triggerBrowserDownload(archive, archiveName);
        return true;
}

export function mediaItemsToZipSources(items: MediaItem[]): ZipSource[] {
        return items.map((item, index) => ({
                url: item.url,
                name: item.caption || item.alt || `image-${index + 1}`
        }));
}

export function logoAssetsToZipSources(assets: LogoAsset[]): ZipSource[] {
        return assets.map((asset, index) => ({
                url: asset.downloadUrl || asset.url,
                name: `${asset.type}-${index + 1}`
        }));
}
