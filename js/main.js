let button;
button=document.getElementById('btn-move');
button.addEventListener('click',moveImages);

function moveImages()
{
    let imageLeft;
    let imageRight;
    let temp;
    imageLeft=document.getElementById('image-left').src;
    imageRight=document.getElementById('image-right').src;
    temp=imageLeft;
    document.getElementById('image-left').src=imageRight
    document.getElementById('image-right').src=temp
}