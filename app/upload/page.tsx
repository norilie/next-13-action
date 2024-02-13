// import { writeFile } from 'fs/promises'

import fs from 'node:fs'

export default function UploadPage() {
  const addImage = async (data: FormData) => {
    'use server'
    const image = data.get('image') as File
    const arrayBuffer = await image.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    const filePath = `./public/${image.name}`
    // await writeFile(filePath, buffer)
    const stream = fs.createWriteStream(filePath)
    stream.write(buffer, error => {
      if (error) {
        throw new Error('Saving file failed!')
      }
    })
  }

  return (
    <div>
      <h1>Server Actions でファイルアップロード</h1>
      <form action={addImage} className='flex items-center mt-4'>
        <input type='file' name='image' className='border mx-2 p-1' />
        <button
          type='submit'
          className='bg-blue-600 px-2 py-1 rounded-lg text-sm text-white'
        >
          Upload
        </button>
      </form>
    </div>
  )
}
