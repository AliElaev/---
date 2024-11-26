document.getElementById('select-game__button').addEventListener('click', function() {
   document.getElementById('form-select').classList.toggle('active');
   this.classList.toggle('open');
 });

 document.getElementById('burger').addEventListener('click', function() {
   document.getElementById('list').classList.toggle('active');
   this.classList.toggle('open');
 });
