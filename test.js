document.addEventListener('DOMContentLoaded', function(event) {
    var form = '<form action="" method="post"><p><textarea name="comment" cols="60" rows="5" placeholder="Напишіть свій коментар"></textarea><br><input type="submit"></p></form>';
    var commentBlock = '<hr><p><em>Коментарів: 0.</em></p>' + form + '<hr>';
    document.querySelector('main').insertAdjacentHTML('beforeend', commentBlock);
});
