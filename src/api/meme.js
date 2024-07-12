export const getAllMemes = async () => {
    const resoponse = await fetch("https://api.imgflip.com/get_memes");
    return await resoponse.json();
}