require(['config'], function() {
    require(['better'], function(BScroll) {
        var btn = document.querySelector('footer');
        var dialog = document.querySelector('.dialog');
        var list = document.querySelector('.list');
        new BScroll('section');
        btn.onclick = function() {
            dialog.style.display = "flex";
        };
        cancel.onclick = function() {
            dialog.style.display = "none";
        };
        save.onclick = function() {
            var value = input.value;
            var html = '';
            html = `<li>
                    <p>
                        <span>分类名称:${value}</span>
                        <span>添加时间：2018-06-21</span>
                    </p>
                    <p>
                        <span>编辑</span>
                        <span id="del">删除</span>
                    </p>
                </li>
              `;
            list.innerHTML += html;
            dialog.style.display = "none";
            input.value = '';
        };
        del.onclick = function() {
            this.parentNode.parentNode.remove();
        }
    })
})