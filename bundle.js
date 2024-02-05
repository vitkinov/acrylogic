(()=>{"use strict";var e;!function(e){e[e.Up=0]="Up",e[e.Down=1]="Down",e[e.Left=2]="Left",e[e.Right=3]="Right"}(e||(e={}));const t=e,n=function(){function e(e,t){this.x=e,this.y=t}return e.prototype.equals=function(e){return this.x===e.x&&this.y===e.y},e.prototype.next=function(n){if(n===t.Up)return new e(this.x,this.y-1);if(n===t.Down)return new e(this.x,this.y+1);if(n===t.Left)return new e(this.x-1,this.y);if(n===t.Right)return new e(this.x+1,this.y);throw new Error("Invalid direction")},e.prototype.toString=function(){return"(".concat(this.x,", ").concat(this.y,")")},e}(),r=function(e,t){this.color=e,this.number=t};var o,i=(o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},o(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});const c=function(e){function t(t){var n=e.call(this,void 0,void 0)||this;return n._coordinate=t,n}return i(t,e),Object.defineProperty(t.prototype,"coordinate",{get:function(){return this._coordinate},enumerable:!1,configurable:!0}),t}(r);var u,l;!function(e){e[e.White=0]="White",e[e.Blue=1]="Blue",e[e.Red=2]="Red",e[e.Yellow=4]="Yellow",e[e.Purple=3]="Purple",e[e.Orange=6]="Orange",e[e.Green=5]="Green",e[e.Black=1/0]="Black"}(l||(l={}));var s=((u={})[l.White]="White",u[l.Blue]="Blue",u[l.Red]="Red",u[l.Yellow]="Yellow",u[l.Purple]="Purple",u[l.Orange]="Orange",u[l.Green]="Green",u[l.Black]="Black",u);const a=l,d=function(){function e(e,t,n){if(this.isCompleted=!1,t<1)throw new Error("Number must be gte ".concat(1,"."));if(t>=5)throw new Error("Number must be lte ".concat(5,"."));this.color=e,this.number=t,this.coordinate=n}return e.prototype.markCompleted=function(e){this.isCompleted=e},e.prototype.isComplete=function(){return this.isCompleted},e.prototype.toString=function(){return"".concat(this.color,"/").concat(this.number," ").concat(this.coordinate.toString())},e}();var h={w:a.White,u:a.Blue,b:a.Black,r:a.Red,g:a.Green,y:a.Yellow,p:a.Purple,o:a.Orange},p={1:1,2:2,3:3,4:4,5:5};const f=function(){function e(e){this.document=e,this.onOk=function(e){},this.el=e.createElement("dialog"),e.body.appendChild(this.el),this.el.innerHTML=this.render(),this.ok=e.getElementById("dialog-ok"),this.ok.addEventListener("click",this.handleOk.bind(this)),this.cancel=e.getElementById("dialog-cancel"),this.cancel.addEventListener("click",this.handleCancel.bind(this)),this.colorSelect=e.getElementById("color-select"),this.numberInput=e.getElementById("number-input"),e.body.addEventListener("keyup",this.handleKeyboardEvent.bind(this))}return e.prototype.handleOk=function(){this.el.close(),this.onOk(this.createGuess())},e.prototype.open=function(e,t){this.el.showModal(),this.onOk=t,this.currentGuess=e,this.resetForm(),void 0!==e&&(void 0!==e.number&&(this.numberInput.value="".concat(e.number)),void 0!==e.color&&(this.colorSelect.value="".concat(e.color)))},e.prototype.close=function(){this.el.close()},e.prototype.handleCancel=function(){this.close()},e.prototype.render=function(){return'<div>\n            <select id="color-select" autofocus>\n                <option value=""></option>\n                '.concat(Object.entries(s).map((function(e){return'<option value="'.concat(e[0],'">').concat(e[1],"</option>")})).join(""),'\n            </select>\n        </div>\n        <div>\n        <input id="number-input" type="number" min="').concat(1,'" max="').concat(5,'" step="1">\n        </div>\n        <div><button id="dialog-ok">Ok</button><button id="dialog-cancel">Cancel</button></div>')},e.prototype.isOpen=function(){return this.el.open},e.prototype.createGuess=function(){return new r(this.getSelectedColor(),this.getSelectedNumber())},e.prototype.getSelectedColor=function(){var e=this.colorSelect.value;if(""!==e)return"Infinity"===e?1/0:parseInt(e,10)},e.prototype.getSelectedNumber=function(){var e=this.numberInput.value;if(""!==e)return parseInt(e,10)},e.prototype.handleKeyboardEvent=function(e){var t=e.key;if("Escape"===t)return e.preventDefault(),void this.close();if("Enter"===t)return this.handleOk(),void e.preventDefault();if("Backspace"===t)return this.resetForm(),void e.preventDefault();if(h.hasOwnProperty(t)){e.preventDefault();var n=h[t];this.colorSelect.value="".concat(n)}else if(p.hasOwnProperty(t)){e.preventDefault();var r=p[t];this.numberInput.value="".concat(r)}},e.prototype.resetForm=function(){this.colorSelect.selectedIndex=-1,this.numberInput.value=""},e}(),v=function(){function e(e,t){this.guesses=[],this._grid=e,this._clues=t}return Object.defineProperty(e.prototype,"grid",{get:function(){return this._grid},enumerable:!1,configurable:!0}),e.prototype.getCell=function(e){return this._grid.cells[e.y][e.x]},Object.defineProperty(e.prototype,"clues",{get:function(){return this._clues},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this._grid.cells.length},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return this._grid.cells[0].length},enumerable:!1,configurable:!0}),e.prototype.getClue=function(e,t){return this._clues.find((function(n){return n.coordinate.equals(e)&&n.direction===t}))},e.prototype.getGuess=function(e){return this.guesses.find((function(t){return t.coordinate.equals(e)}))},e.prototype.updateGuess=function(e){var t=this.getGuess(e.coordinate);t?(t.color=e.color,t.number=e.number):this.guesses.push(e);var n=this.getCell(e.coordinate);n.markCompleted(e.number===n.number&&e.color===n.color)},e.prototype.isComplete=function(){return this._grid.cells.every((function(e){return e.every((function(e){return e.isComplete()}))}))},e}(),m=function(){function e(e){this._cells=e}return Object.defineProperty(e.prototype,"cells",{get:function(){return this._cells},enumerable:!1,configurable:!0}),e.prototype.getCell=function(e){return this._cells[e.y][e.x]},e.prototype.validate=function(){return!0},e}(),y=function(e,t,n,r,o){this.coordinate=e,this.direction=t,this.color=n,this.number=r,this.not=o},g=function(){function e(){var e=this;this.buildGrid=function(t){return new m(t.map((function(t,n){return e.mapRow(t,n)})))},this.mapRow=function(t,n){return t.map((function(t,r){return e.mapCell(t,n,r)}))},this.mapCell=function(e,t,r){return new d(e.color,e.number,new n(r,t))},this.buildClues=function(t){return t.map((function(t){return e.buildClue(t)}))},this.buildClue=function(e){return new y(new n(e.x,e.y),e.direction,e.color,e.number)}}return e.prototype.build=function(e){return new v(this.buildGrid(e.grid),this.buildClues(e.clues))},e}(),b=function(){function e(e){this.game=e}return e.prototype.render=function(){var e=this;return'<div class="game '.concat(this.game.height,"-rows ").concat(this.game.width,'-cols">\n            <div class="horizontal-border"></div>\n            ').concat(this.game.grid.cells.map((function(t){return e.renderRow(t)}),this).join(""),"\n        </div>")},e.prototype.renderRow=function(e){var t=this;return'\n            <div class="row">\n                <div class="vertical-border"></div>\n                '.concat(e.map((function(e){return t.renderCell(e)}),this).join(""),'\n            </div>\n            <div class="row">\n                ').concat(this.renderHorizontalClues(e),"\n            </div>\n        ")},e.prototype.renderCell=function(e){var n=this.game.getClue(e.coordinate,t.Right);return'\n            <div class="cell'.concat(this.renderCellClassName(e),'"\n            data-x="').concat(e.coordinate.x,'"\n            data-y="').concat(e.coordinate.y,'"\n            >\n                ').concat(this.renderCellValue(e),'\n            </div>\n            <div class="vertical-border').concat(this.renderClueClassName(n),'">\n                ').concat(this.renderClueValue(n),"\n            </div>\n        ")},e.prototype.renderCellValue=function(e){var t=this.game.getGuess(e.coordinate);return void 0!==t&&void 0!==t.number?"".concat(t.number):""},e.prototype.renderCellClassName=function(e){var t=this.game.getGuess(e.coordinate);return void 0!==t?" color-".concat(t.color):""},e.prototype.renderClueValue=function(e){return void 0===e?"":void 0!==e.color?'<span class="clue">'.concat(s[e.color],"</span>"):'<span class="clue">'.concat(e.number,"</span>")},e.prototype.renderClueClassName=function(e){return void 0===e||void 0===e.color?"":" color-".concat(e.color)},e.prototype.renderHorizontalClues=function(e){var t=this;return"<div></div>".concat(e.map((function(e){return t.renderHorizontalClue(e)})).join(""))},e.prototype.renderHorizontalClue=function(e){var n=this.game.getClue(e.coordinate,t.Down);return'\n            <div class="horizontal-border'.concat(this.renderClueClassName(n),'">\n                <span class="clue">').concat(this.renderClueValue(n),"</span>\n            </div>\n            <div></div>")},e}();var w=function(){function e(e,t){this.root=e,this.document=t,this.gameBuilder=new g;var n=this.document.getElementById(this.root);if(this.dialog=new f(t),null===n)throw new Error("Could not find root element");this.element=n,t.addEventListener("click",this.handleCellClick.bind(this))}return e.prototype.handleCellClick=function(e){var t,r;if(!this.dialog.isOpen()){var o=e.target;if(null!==o&&o.classList.contains("cell")){var i=o.dataset.x,c=o.dataset.y;if(void 0!==i&&void 0!==c){var u=new n(parseInt(i,10),parseInt(c,10));this.currentCell=null===(t=this.game)||void 0===t?void 0:t.getCell(u),this.dialog.open(null===(r=this.game)||void 0===r?void 0:r.getGuess(u),this.handleOk.bind(this))}}}},e.prototype.handleOk=function(e){var t;if(void 0===this.currentCell)throw new Error("currentCell is undefined");var n=new c(this.currentCell.coordinate);if(n.color=e.color,n.number=e.number,null===(t=this.game)||void 0===t||t.updateGuess(n),this.currentCell=void 0,void 0===this.game)throw new Error("game is undefined");this.element.innerHTML=new b(this.game).render(),this.winCheck()},e.prototype.createGame=function(e){return this.gameBuilder.build(e)},e.prototype.newGame=function(e){return t=this,n=void 0,o=function(){var t,n;return function(e,t){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(u){return function(l){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,u[0]&&(c=0)),c;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return c.label++,{value:u[1],done:!1};case 5:c.label++,r=u[1],u=[0];continue;case 7:u=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){c=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){c.label=u[1];break}if(6===u[0]&&c.label<o[1]){c.label=o[1],o=u;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(u);break}o[2]&&c.ops.pop(),c.trys.pop();continue}u=t.call(e,c)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,l])}}}(this,(function(r){switch(r.label){case 0:return[4,(o="./api/game/".concat(e,".json"),void 0===i&&(i={}),fetch(o,i).then((function(e){return e.json()})).then((function(e){return e})))];case 1:return t=r.sent(),this.game=this.createGame(t),n=new b(this.game),this.element.innerHTML=n.render(),[2]}var o,i}))},new((r=void 0)||(r=Promise))((function(e,i){function c(e){try{l(o.next(e))}catch(e){i(e)}}function u(e){try{l(o.throw(e))}catch(e){i(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(c,u)}l((o=o.apply(t,n||[])).next())}));var t,n,r,o},e.prototype.winCheck=function(){var e;(null===(e=this.game)||void 0===e?void 0:e.isComplete())&&setTimeout((function(){return alert("Victory!")}),0)},e}();new w("app",window.document).newGame(2)})();