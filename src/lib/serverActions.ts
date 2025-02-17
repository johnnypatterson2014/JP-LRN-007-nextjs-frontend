'use server'

export async function testAction(prevState, formData) {
    const errors = {}
    const myValue = formData.get('username')
    console.log(myValue)
    return {
        username: myValue
    }
}