'use server'

export async function testAction() {
    console.log("This is a server action.")
    return {
        success: "true"
    }
}