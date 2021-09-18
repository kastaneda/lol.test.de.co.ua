document.addEventListener('DOMContentLoaded', function(event) {
    var form = '<form action="" method="post"><p><textarea name="comment" cols="60" rows="5" placeholder="Напишіть свій коментар"></textarea><br><input type="submit"></p></form>';
    var commentBlock = '<aside><p><em>Коментарів: 0.</em></p>' + form + '</aside>';
    document.querySelector('main').insertAdjacentHTML('afterend', commentBlock);
});
