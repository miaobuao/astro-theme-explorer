export interface AbstractFile {
	absPath: string
	isDir: boolean
	children?: AbstractFile[]
}
