'use server'

export async function testAction(prevState, formData) {
    const errors = {}
    const uploadFileName = formData.get('upload-file-name')
    console.log(formData)
    console.log(uploadFileName)
    return {
        upload_file_name: uploadFileName
    }


}