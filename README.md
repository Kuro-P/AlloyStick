<p align="center">
<img src="./logo.png" style="width:300px"/>
</p>
<p align="center">
<a href='http://alloyteam.github.io/AlloyStick'>
http://alloyteam.github.io/AlloyStick
</a>
</p>

## Demo

We have a demo in this project, you can download the project and run `example/stickman/index.html` by yourself.

## Usage

We only exposed two variables(classes) for the window. So all operations are based on these two classes:

```
window.AlloyStick
window.AlloyUtils 
```
Here is a suggested workflow to start your animation:

#### create a scene

the only parameter is the context for the canvas.

```
let demoInstance = new window.AlloyStick({context:canvas.getContext('2d')});
```

#### add an object

A scene can has object, you can add objects one by one manually.

there are four parameters：

* the config for the object
* the initial action([animationName,totalFrames,transitionFrames,isloop] and the order of this array can be changed)
* the position of the Object
* Whether to call the easing function(In fact the easing function can be redefined by yourself)

```
demoInstance.addObj(
        {
            roleName:'xiaoxiao',
            image:textureImg,
            data:AlloyData,
            fps:40
        },
        ['comeon',40,10,false],
        {
            x:250,
            y:300
        },
        {
            ifEase:true,
        }
    );
```

#### bind events

You can call the actions by using function, but the more convenient way is to bind a key to an event: when the user press down the certain key , an action should be called.

The second parameter means the action is called whether 'keydown' or 'keyup'.

The third parameter are some hook functions. There are four hooks totally:

```
beforeKeyDown
afterKeyDown
beforeKeyUp
afterKeyUp
```

**The fourth parameter is important :** there are two modes for the animation: the wait mode and the replace mode. In the wait mode, all the triggerd animations will be in an array and acts one by one, pressing a keyboard button for many times quickly can cause the accumulation of animations.
But in the replaced mode, the animation being executed can not be interrupted, but there is at most one animation waiting, and there is no accumulation of animations. 

the two modes can be used in different scenes.

Finally the example:

```
demoInstance.mapKeyToAni(
        {
            'j':{rules:[{role:'xiaoxiao',action:['simpleHit',12,5,false]},{role:'dada',action:['simpleHit',12,5,false]}]},
            //others are omitted
        },
        'keydown',
        {
            beforeKeyDown:function(e){
                let doms = document.getElementsByClassName('key_'+e.key);
                for(let i = 0; i<doms.length; i++){
                    AlloyUtils.addClass(doms[i],'pressdown');
                }
            },
            afterKeyUp:function(e){
                let doms = document.getElementsByClassName('key_'+e.key);
                for(let i = 0; i<doms.length; i++){
                    AlloyUtils.removeClass(doms[i],'pressdown');
                }
            }
        },
        'replace',
    );
```

#### start

Just start the instance:

```
demoInstance.start();
```

## API

### window.AlloyStick

#### new AlloyStick(config) 

* arguments:
	* {Object} config
* return: the instance of AlloyStick
* example: 

```
let demoInstance = new window.AlloyStick({context:canvas.getContext('2d')});
``` 

#### AlloyStick.addObj(roleConfig,initialAction,initialPosition,easeConfig)

* arguments:
	* {Object}roleConfig
	* {Object}initialAction
	* {Object}initialPosition
	* {Object}easeConfig 
		* default:`{ifEase:false}`*
		* Optional
* return: no return
* usage: add object to this instance's scene(an instance of AlloyStick has only one scene)
* example:

```
demoInstance.addObj(
        {
            roleName:'xiaoxiao',
            image:textureImg,
            data:AlloyData,
            fps:40
        },
        ['comeon',40,10,false],
        {
            x:250,
            y:300
        },
        {
            ifEase:true,
        }
    );
```

#### AlloyStick.roleNumbers()

* arguments: no arguments
* return: {Number}
* usage: return the number of objects of this AlloyStick instance


#### AlloyStick.setVector(roleName)

* arguments:
	* {String}roleName
		* Optional  
* return: no return
* usage: change all the roles(when the roleName is undefined) or certain roles to the vector mode 

#### AlloyStick.removeVector(roleName)

* arguments:
	* {String}roleName
		* Optional
* return: no return
* usage: change all the roles(when the roleName is undefined) or certain roles to the normal mode

#### AlloyStick.showFPS(dom)

* arguments:
	* {String|dom}dom
		* Optional
* returns: no return
* usage: show the fps monitor

#### AlloyStick.hideFPS()  

* arguments: no argument
* return: no return
* usage: hide the fps monitor

#### AlloyStick.pause(obj)

* arguments: 
	* {Object}obj 
		* Optional
* return: no return
* usage: pause or restart the whole scene(if obj is undefined or no roleName is defined in the obj) or the certain role
	* hint: when no 'value' property is specified in the obj, the pause means switch state, pause() twice means restart 
* example:

```
demoInstance.pause({
		value:false /*means restart*/
		roleName:"xiaoxiao"
	})
```
	 
#### AlloyStick.clear()

* arguments: no arguments
* return: no return
* usage: clear the whole scene of this instance

#### AlloyStick.mapKeyToAni(lists,keyDownOrUp,callBacks,replaceOrWait = 'wait')

* arguments: 
	* {Object}lists
	* {'keydown'|'keyup'}keyDownOrUp
	* {Object}callBacks
	* {'wait'|'replace'}replaceOrWait
		* default: 'wait'
		* Optional 
* return: no return
* usage: map the keyboard buttons to actions
* example:

```
demoInstance.mapKeyToAni(
        {
            'j':{rules:[{role:'xiaoxiao',action:['simpleHit',12,5,false]},{role:'dada',action:['simpleHit',12,5,false]}]},
            //others are omitted
        },
        'keydown',
        {
            beforeKeyDown:function(e){
                let doms = document.getElementsByClassName('key_'+e.key);
                for(let i = 0; i<doms.length; i++){
                    AlloyUtils.addClass(doms[i],'pressdown');
                }
            },
            afterKeyUp:function(e){
                let doms = document.getElementsByClassName('key_'+e.key);
                for(let i = 0; i<doms.length; i++){
                    AlloyUtils.removeClass(doms[i],'pressdown');
                }
            }
        },
        'replace',
    );
```


#### AlloyStick.addRules(lists)

* arguments:
	* {Object}lists 
* return: no return
* usage: add the rules for mapping the keyboard buttons to actions

#### AlloyStick.removeRules(key,role)

* arguments:
	* {String}key
	* role
		* optional 
* return: no return
* usage: add the rules for mapping the keyboard buttons to actions(if the parameter role is undefined, remove all the actions for the key, else remove the actions of the certain role for the key)


#### AlloyStick.changeReplaceOrWait(replaceOrWait)
* arguments: 
	* {'wait'|'replace'}replaceOrWait
* return: no return
* usage: change the mode to 'wait' mode or 'replace' mode.

#### AlloyStick.start()

* arguments: no argument
* return: no return
* usage: start this Instance


 
## Licence

This content is released under the GPL License.