// Use Vite's import.meta.glob to resolve assets at build time
const assetsGlob = import.meta.glob('../assets/**/*', { eager: true, as: 'url' })

// Create a mapping from path to URL
const pathToUrl = {}
for (const [path, url] of Object.entries(assetsGlob)) {
	// Normalize path: remove '../assets/' prefix
	const normalizedPath = path.replace('../assets/', '')
	pathToUrl[normalizedPath] = url
}

export function imageUrl(pathFromAssets) {
	// Example: imageUrl('Pictures/logo.png') or imageUrl('gallery/image1.jpg')
	// Normalize path separators (handle both / and \)
	const normalizedPath = pathFromAssets.replace(/\\/g, '/')
	return pathToUrl[normalizedPath] || ''
}
