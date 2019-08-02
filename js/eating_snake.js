/*-----------------------Tools----------------------*/
;(function (window,undefined) {
    var Tools ={
        getRandom:function (min,max) {
            return Math.floor(Math.random()*(max-min+1))+min;
        }
    }
    window.Tools = Tools;
})(window,undefined)
/*-----------------------food----------------------*/
;(function (window,undefined) {
    /*全局变量*/
    var position  = 'absolute';
    //用来存放元素
    var elements = [];
    /*食物对象*/
    function Food(options) {
        options = options ||{};
        this.x = options.x || 0;
        this.y = options.y || 0;
        this.width = options.width || 20;
        this.height = options.height || 20;
        this.color = options.color || 'yellow';
    }
    /*渲染*/
    Food.prototype.render = function (map) {
        /*删除之前页面上的食物*/
        remove();
        /*随机生成食物的初始位置*/
        this.x = Tools.getRandom(0,map.offsetWidth/this.width - 1) * this.width;
        this.y = Tools.getRandom(0,map.offsetHeight/this.height - 1) * this.height;
        //alert(this.y);
        /*将食物放在游戏界面上*/
        var div = document.createElement('div');
        map.appendChild(div);
        elements.push(div);
        /*设置div的样式*/
        div.style.position = position;
        div.style.left = this.x +'px';
        div.style.top = this.y + 'px';
        div.style.width = this.width + 'px';
        div.style.height = this.height + 'px';
        div.style.backgroundColor = this.color;
    }
    /*删除食物*/
    function remove() {
        for (var i = elements.length - 1; i >= 0 ; i -- ){
            //删除div
            elements[i].parentNode.removeChild(elements[i]);
            //删除数组中的元素---i:从第几个元素开始删除，1：每次删除几个元素
            elements.splice(i,1);
        }
    }
    //向外部开启接口，外部可以调用函数
    window.Food = Food;
})(window,undefined)
/*-----------------------Snake----------------------*/
/*自调用函数---避免命名冲突*/
;(function (window,undefined) {
    /*变量*/
    var position = 'absolute';
    //记录之前创建的蛇
    var elements = [];
    /*蛇对象*/
    function Snake(options) {
        options = options ||{};
        //蛇节的大小
        this.width = options.width || 20;
        this.height = options.height || 20;
        //蛇头移动的方向
        this.direction = options.direction || 'right';
        //蛇的身体
        this.body = [
            {x: 3, y: 2,color: 'red'},
            {x: 2, y: 2,color: 'blue'},
            {x: 1, y: 2,color: 'blue'}
        ];
    }
    /*渲染*/
    Snake.prototype.render = function (map) {
        //删除之前的蛇
        remove();
        //把每一个蛇节渲染在地图上
        for(var i = 0, len =this.body.length; i < len ; i++ ){
            //蛇节
            var object = this.body[i];
            var div = document.createElement('div');
            map.appendChild(div);
            elements.push(div);
            //div样式
            div.style.position = position;
            div.style.left = object.x * this.width + this.width + 'px';
            div.style.top = object.y * this.height + this.height + 'px';
            div.style.width = this.width + 'px';
            div.style.height = this.height + 'px';
            div.style.backgroundColor =object.color;
        }
    }
    /*蛇移动*/
    Snake.prototype.move = function(food,map){
        //蛇身体
        for (var i = this.body.length -1 ; i > 0 ; i--){
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        //蛇头
        var head = this.body[0];
        //判断蛇头移动的方向
        switch (this.direction) {
            case 'right':
                head.x += 1;
                break;
            case 'left':
                head.x -= 1;
                break;
            case 'top':
                head.y -= 1;
                break;
            case 'bottom':
                head.y += 1;
                break;
        }
        //判断蛇头与食物的坐标一致
        var headX = head.x * this.width + this.width/2;
        var headY = head.y * this.height + this.height/2;
        if (headX === food.x - this.width / 2 && headY === food.y - this.height / 2){
            //蛇增加一节
            var last = this.body[this.body.length -1];
            this.body.push({
                x:last.x,
                y:last.y,
                color:last.color
            })
            food.render(map);
        }
    }
    //蛇移动
    function remove(){
        for (var i = elements.length - 1; i >= 0 ;i-- ){
            //删除div
            elements[i].parentNode.removeChild(elements[i]);
            //删除数组中的元素---i:从第几个元素开始删除，1：每次删除几个元素
            elements.splice(i,1);
        }
    }
    /*创建外部调用的接口*/
    window.Snake = Snake;
})(window,undefined)
/*-----------------------game----------------------*/
;(function (window,undefined) {
    var that;//记录游戏对象
    /*游戏对象*/
    function Game(map) {
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
        that = this;
    }
    /*渲染*/
    Game.prototype.start = function () {
        //渲染食物
        this.food.render(this.map);
        //渲染蛇
        this.snake.render(this.map);
        //游戏逻辑
        //蛇遇到边界时结束
        runSnake();
        //通过键盘控制蛇的方向
        bindkey();
        //蛇遇到食物时变长
        //蛇移动

    }
    /*蛇移动*/
    function runSnake(){
        var timerid = setInterval(function () {
            //蛇移动
            this.snake.move(this.food,this.map);
            this.snake.render(this.map);
            //蛇遇到边界时结束
            var maxX = this.map.offsetWidth / this.snake.width;
            var maxY = this.map.offsetHeight / this.snake.height;
            var headX = this.snake.body[0].x;
            var headY = this.snake.body[0].y;
            if(headX < 0 || headX >= maxX ||headY < 0 || headY >= maxY){
                // console.log(headX+' '+maxX);
                //console.log(headY);
                alert('game over');
                clearInterval(timerid);
            }
        }.bind(that),150);
    }
    /*注册键盘事件*/
    function bindkey(){
        //添加事件
        document.addEventListener('keydown',function (e) {
            //键盘码---
            switch (e.keyCode) {
                case 37:
                    this.snake.direction = 'left';
                    break;
                case 38:
                    this.snake.direction = 'top';
                    break;
                case 39:
                    this.snake.direction = 'right';
                    break;
                case 40:
                    this.snake.direction = 'bottom';
                    break;
            }
        }.bind(that),false);
    }
    window.Game = Game;
})(window,undefined)
/*-----------------------main----------------------*/
;(function (window,undefined) {
    var map = document.getElementById('map');
    var game = new Game(map);
    game.start();
})(window,undefined)
