// Eagerly import all assets from src/assets to generate URLs at build time
// Supports resolving legacy paths like "/Pictures/xyz.png" or "/gallery/abc.jpg"

const picturesGlob = import.meta.glob('../assets/Pictures/*', { eager: true, as: 'url' })
const galleryGlob = import.meta.glob('../assets/gallery/*', { eager: true, as: 'url' })

const filenameToUrl = {}

for (const [path, url] of Object.entries(picturesGlob)) {
	const filename = path.split('/').pop()
	filenameToUrl[filename] = url
}

for (const [path, url] of Object.entries(galleryGlob)) {
	const filename = path.split('/').pop()
	filenameToUrl[filename] = url
}

export function asset(legacyPath) {
	if (!legacyPath) return ''
	const filename = legacyPath.split('/').pop()
	return filenameToUrl[filename] || ''
}


