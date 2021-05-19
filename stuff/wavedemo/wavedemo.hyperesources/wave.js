!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define(i):(t="undefined"!=typeof globalThis?globalThis:t||self).SiriWave=i()}(this,(function(){"use strict";
var t=function(){return(t=Object.assign||function(t){for(var i,s=1,e=arguments.length;s<e;s++)for(var h in i=arguments[s])Object.prototype.hasOwnProperty.call(i,h)&&(t[h]=i[h]);return t}).apply(this,arguments)};var i=function(){function t(t,i){this.ATT_FACTOR=4,this.GRAPH_X=2,this.AMPLITUDE_FACTOR=.6,this.ctrl=t,this.definition=i}return t.prototype.globalAttFn=function(t){return Math.pow(this.ATT_FACTOR/(this.ATT_FACTOR+Math.pow(t,this.ATT_FACTOR)),this.ATT_FACTOR)},t.prototype.xPos=function(t){return this.ctrl.width*((t+this.GRAPH_X)/(2*this.GRAPH_X))},t.prototype.yPos=function(t){return this.AMPLITUDE_FACTOR*(this.globalAttFn(t)*(this.ctrl.heightMax*this.ctrl.amplitude)*(1/this.definition.attenuation)*Math.sin(this.ctrl.opt.frequency*t-this.ctrl.phase))},t.prototype.draw=function(){var t=this.ctrl.ctx;t.moveTo(0,0),t.beginPath();var i=this.ctrl.color.replace(/rgb\(/g,"").replace(/\)/g,"");t.strokeStyle="rgba("+i+","+this.definition.opacity+")",t.lineWidth=this.definition.lineWidth;for(var s=-this.GRAPH_X;s<=this.GRAPH_X;s+=this.ctrl.opt.pixelDepth)t.lineTo(this.xPos(s),this.ctrl.heightMax+this.yPos(s));t.stroke()},t.getDefinition=function(){return[{attenuation:-2,lineWidth:1,opacity:.1},{attenuation:-6,lineWidth:1,opacity:.2},{attenuation:4,lineWidth:1,opacity:.4},{attenuation:2,lineWidth:1,opacity:.6},{attenuation:1,lineWidth:1.5,opacity:1}]},t}(),s=function(){function t(t,i){this.GRAPH_X=25,this.AMPLITUDE_FACTOR=.8,this.SPEED_FACTOR=1,this.DEAD_PX=2,this.ATT_FACTOR=4,this.DESPAWN_FACTOR=.02,this.NOOFCURVES_RANGES=[2,5],this.AMPLITUDE_RANGES=[.3,1],this.OFFSET_RANGES=[-3,3],this.WIDTH_RANGES=[1,3],this.SPEED_RANGES=[.5,1],this.DESPAWN_TIMEOUT_RANGES=[500,2e3],this.ctrl=t,this.definition=i,this.noOfCurves=0,this.spawnAt=0,this.prevMaxY=0,this.phases=[],this.offsets=[],this.speeds=[],this.finalAmplitudes=[],this.widths=[],this.amplitudes=[],this.despawnTimeouts=[],this.verses=[]}return t.prototype.getRandomRange=function(t){return t[0]+Math.random()*(t[1]-t[0])},t.prototype.spawnSingle=function(t){this.phases[t]=0,this.amplitudes[t]=0,this.despawnTimeouts[t]=this.getRandomRange(this.DESPAWN_TIMEOUT_RANGES),this.offsets[t]=this.getRandomRange(this.OFFSET_RANGES),this.speeds[t]=this.getRandomRange(this.SPEED_RANGES),this.finalAmplitudes[t]=this.getRandomRange(this.AMPLITUDE_RANGES),this.widths[t]=this.getRandomRange(this.WIDTH_RANGES),this.verses[t]=this.getRandomRange([-1,1])},t.prototype.getEmptyArray=function(t){return new Array(t)},t.prototype.spawn=function(){this.spawnAt=Date.now(),this.noOfCurves=Math.floor(this.getRandomRange(this.NOOFCURVES_RANGES)),this.phases=this.getEmptyArray(this.noOfCurves),this.offsets=this.getEmptyArray(this.noOfCurves),this.speeds=this.getEmptyArray(this.noOfCurves),this.finalAmplitudes=this.getEmptyArray(this.noOfCurves),this.widths=this.getEmptyArray(this.noOfCurves),this.amplitudes=this.getEmptyArray(this.noOfCurves),this.despawnTimeouts=this.getEmptyArray(this.noOfCurves),this.verses=this.getEmptyArray(this.noOfCurves);for(var t=0;t<this.noOfCurves;t++)this.spawnSingle(t)},t.prototype.globalAttFn=function(t){return Math.pow(this.ATT_FACTOR/(this.ATT_FACTOR+Math.pow(t,2)),this.ATT_FACTOR)},t.prototype.sin=function(t,i){return Math.sin(t-i)},t.prototype.yRelativePos=function(t){for(var i=0,s=0;s<this.noOfCurves;s++){var e=4*(s/(this.noOfCurves-1)*2-1);e+=this.offsets[s];var h=t*(1/this.widths[s])-e;i+=Math.abs(this.amplitudes[s]*this.sin(this.verses[s]*h,this.phases[s])*this.globalAttFn(h))}return i/this.noOfCurves},t.prototype.yPos=function(t){return this.AMPLITUDE_FACTOR*this.ctrl.heightMax*this.ctrl.amplitude*this.yRelativePos(t)*this.globalAttFn(t/this.GRAPH_X*2)},t.prototype.xPos=function(t){return this.ctrl.width*((t+this.GRAPH_X)/(2*this.GRAPH_X))},t.prototype.drawSupportLine=function(){var t=this.ctrl.ctx,i=[0,this.ctrl.heightMax,this.ctrl.width,1],s=t.createLinearGradient.apply(t,i);s.addColorStop(0,"transparent"),s.addColorStop(.1,"rgba(255,255,255,.5)"),s.addColorStop(.8,"rgba(255,255,255,.5)"),s.addColorStop(1,"transparent"),t.fillStyle=s,t.fillRect.apply(t,i)},t.prototype.draw=function(){var t=this.ctrl.ctx;if(t.globalAlpha=.7,t.globalCompositeOperation="lighter",0===this.spawnAt&&this.spawn(),this.definition.supportLine)return this.drawSupportLine();for(var i=0;i<this.noOfCurves;i++)this.spawnAt+this.despawnTimeouts[i]<=Date.now()?this.amplitudes[i]-=this.DESPAWN_FACTOR:this.amplitudes[i]+=this.DESPAWN_FACTOR,this.amplitudes[i]=Math.min(Math.max(this.amplitudes[i],0),this.finalAmplitudes[i]),this.phases[i]=(this.phases[i]+this.ctrl.speed*this.speeds[i]*this.SPEED_FACTOR)%(2*Math.PI);for(var s=-1/0,e=0,h=[1,-1];e<h.length;e++){var n=h[e];t.beginPath();for(var o=-this.GRAPH_X;o<=this.GRAPH_X;o+=this.ctrl.opt.pixelDepth){var r=this.xPos(o),a=this.yPos(o);t.lineTo(r,this.ctrl.heightMax-n*a),s=Math.max(s,a)}t.closePath(),t.fillStyle="rgba("+this.definition.color+", 1)",t.strokeStyle="rgba("+this.definition.color+", 1)",t.fill()}return s<this.DEAD_PX&&this.prevMaxY>s&&(this.spawnAt=0),this.prevMaxY=s,null},t.getDefinition=function(){return[{color:"255,255,255",supportLine:!0},{color:"15, 82, 169"},{color:"173, 57, 76"},{color:"48, 220, 155"}]},t}();return function(){function e(e){var h=this,n=e.container,o=function(t,i){var s={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&i.indexOf(e)<0&&(s[e]=t[e]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var h=0;for(e=Object.getOwnPropertySymbols(t);h<e.length;h++)i.indexOf(e[h])<0&&Object.prototype.propertyIsEnumerable.call(t,e[h])&&(s[e[h]]=t[e[h]])}return s}(e,["container"]);this.phase=0,this.run=!1,this.curves=[];var r=window.getComputedStyle(n);this.opt=t({container:n,style:"ios",ratio:window.devicePixelRatio||1,speed:.2,amplitude:1,frequency:6,color:"#fff",cover:!1,width:parseInt(r.width.replace("px",""),10),height:parseInt(r.height.replace("px",""),10),autostart:!0,pixelDepth:.02,lerpSpeed:.1},o),this.speed=Number(this.opt.speed),this.amplitude=Number(this.opt.amplitude),this.width=Number(this.opt.ratio*this.opt.width),this.height=Number(this.opt.ratio*this.opt.height),this.heightMax=Number(this.height/2)-6,this.color="rgb("+this.hex2rgb(this.opt.color)+")",this.interpolation={speed:this.speed,amplitude:this.amplitude},this.canvas=document.createElement("canvas");var a=this.canvas.getContext("2d");if(null===a)throw new Error("Unable to create 2D Context");switch(this.ctx=a,this.canvas.width=this.width,this.canvas.height=this.height,!0===this.opt.cover?this.canvas.style.width=this.canvas.style.height="100%":(this.canvas.style.width=this.width/this.opt.ratio+"px",this.canvas.style.height=this.height/this.opt.ratio+"px"),this.opt.style){case"ios9":this.curves=(this.opt.curveDefinition||s.getDefinition()).map((function(t){return new s(h,t)}));break;case"ios":default:this.curves=(this.opt.curveDefinition||i.getDefinition()).map((function(t){return new i(h,t)}))}this.opt.container.appendChild(this.canvas),this.opt.autostart&&this.start()}return e.prototype.hex2rgb=function(t){t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(t,i,s,e){return i+i+s+s+e+e}));var i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return i?parseInt(i[1],16).toString()+","+parseInt(i[2],16).toString()+","+parseInt(i[3],16).toString():null},e.prototype.intLerp=function(t,i,s){return t*(1-s)+i*s},e.prototype.lerp=function(t){var i=this.interpolation[t];return null!==i&&(this[t]=this.intLerp(this[t],i,this.opt.lerpSpeed),this[t]-i==0&&(this.interpolation[t]=null)),this[t]},e.prototype.clear=function(){this.ctx.globalCompositeOperation="destination-out",this.ctx.fillRect(0,0,this.width,this.height),this.ctx.globalCompositeOperation="source-over"},e.prototype.draw=function(){this.curves.forEach((function(t){return t.draw()}))},e.prototype.startDrawCycle=function(){this.clear(),this.lerp("amplitude"),this.lerp("speed"),this.draw(),this.phase=(this.phase+Math.PI/2*this.speed)%(2*Math.PI),window.requestAnimationFrame?this.animationFrameId=window.requestAnimationFrame(this.startDrawCycle.bind(this)):this.timeoutId=setTimeout(this.startDrawCycle.bind(this),20)},e.prototype.start=function(){if(!this.canvas)throw new Error("This instance of SiriWave has been disposed, please create a new instance");this.phase=0,this.run||(this.run=!0,this.startDrawCycle())},e.prototype.stop=function(){this.phase=0,this.run=!1,this.animationFrameId&&window.cancelAnimationFrame(this.animationFrameId),this.timeoutId&&clearTimeout(this.timeoutId)},e.prototype.dispose=function(){this.stop(),this.canvas&&(this.canvas.remove(),this.canvas=null)},e.prototype.set=function(t,i){this.interpolation[t]=i},e.prototype.setSpeed=function(t){this.set("speed",t)},e.prototype.setAmplitude=function(t){this.set("amplitude",t)},e}()}));