document.addEventListener('DOMContentLoaded', function(event) {
    var url = document.querySelector('link[rel=canonical]');
    url = url ? url.getAttribute('href') : location.href;

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                document.getElementById('comments').innerHTML = xhr.responseText;
            } else {
                document.getElementById('comments').innerHTML = '<p><em>Коментарі до цього посту відсутні.</em></p>';
            }
        }
    };
    xhr.open('GET', 'http://lol.test.localhost/ajax.html?foo=' + encodeURI(url), true);
    xhr.send();

    var form = '<form action="http://lol.test.localhost/post.php" method="post"><p>' +
        '<input type="hidden" name="url" value="' + encodeURI(url) + '">' +
        '<textarea name="comment" cols="60" rows="3" placeholder="Напишіть свій коментар"></textarea><br>' +
        '<input type="submit"></p></form>';

    var comments = '<div id="comments"><p><em>Завантажуємо коментарі…</em></p></div>';

    var bottomBlock = '<aside>' + comments + form + '</aside>';
    document.querySelector('main').insertAdjacentHTML('afterend', bottomBlock);
});
