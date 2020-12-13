const where = document.querySelector('.where');
const items = document.querySelector('.items');
const single = document.getElementById('.single');

if(screen.width < 600){
  // items.style.display='block';
  where.style.display = 'block';
  document.querySelector('.fourth').style.display  = 'none';
  // single.style.display = 'inline-block';
}
