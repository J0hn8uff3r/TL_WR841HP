(function(a){a.su.Widget("wizard",{defaults:{autoStart:true,items:[{name:"",label:"",content:"",prevHandler:null,nextHandler:null}],currentIndex:0,rebootFlag:false,isInvalid:false,isSummaryInvalid:false,rebootHandler:null,finishHandler:null,saveHandler:null},create:function(d,b){var c=this;c.each(function(k,j){var g=a(j);a.extend(j,d,b);var f='<div class="process-flow-wrap">',p=a('<div class="form-container"></div>');var n=j.items,m=n.length,o="up";for(var l=0;l<m;l++){var r=n[l],q=(l==(m-1))?"lst":"",o=(o==="up")?"down":"up";f+='<div name="'+r.name+'" class="process-flow-step step'+l+" "+q+'">';f+='<span class="icon">';f+='<span class="text '+o+'" style="margin-left: '+r.labelPos+'px">'+r.label+"</span>";f+="</span>";f+="</div>";if(q!="lst"){f+='<span class="bar"><span class="bar-inner"></span></span>'}var h=a(r.content).css("display","none").attr("name",r.name).addClass("form-step");if(h.length!=0){p.append(h.detach())}}f+="</div>";var e='<div class="process-flow-container">'+f;e+='<div class="buttons-container">';e+='<button class="wizard-btn btn-back " type="button"></button>';e+='<button class="wizard-btn btn-next" type="button"></button>';e+='<button class="wizard-btn btn-save" type="button"></button>';e+='<button class="wizard-btn btn-reboot" type="button"></button>';e+='<button class="wizard-btn btn-finish" type="button"></button>';e+="</div>";e+="</div>";g.empty().append(a(e));g.find("button.wizard-btn.btn-back").button({text:a.su.CHAR.OPERATION.BACK,cls:"back-button-container submit",handler:function(i){c.wizard("goBack")}});g.find("button.wizard-btn.btn-next").button({text:a.su.CHAR.OPERATION.NEXT,cls:"next-button-container submit",handler:function(i){c.wizard("goNext")}});g.find("button.wizard-btn.btn-finish").button({text:a.su.CHAR.OPERATION.FINISH,cls:"finish-button-container submit",handler:function(i){c.wizard("goFinish")}});g.find("button.wizard-btn.btn-save").button({text:"Save",cls:"save-button-container submit",handler:function(i){c.wizard("goSave")}});g.find("button.wizard-btn.btn-reboot").button({text:"Reboot",cls:"reboot-button-container submit",handler:function(i){c.wizard("goReboot")}});g.find("div.back-button-container").css("display","none");g.find("div.finish-button-container").css("display","none");g.find("div.save-button-container").css("display","none");g.find("div.reboot-button-container").css("display","none");p.insertBefore(g.find("div.buttons-container"))});if(b.autoStart!==false){c.wizard("geToIndex",0)}c.delegate("div.process-flow-step","click",function(h){var g=a(this).attr("name");obj=c.get(0),items=obj.items;var f=0;for(f=0;f<items.length;f++){if(g===items[f]["name"]){break}}if(f>=obj.currentIndex){c.trigger("ev_nextValidate",items[obj.currentIndex]["content"]);if(true==obj.isInvalid){obj.isInvalid=false;return}}});return c},setRebootFlag:function(b){var c=b.get(0);c.rebootFlag=true},setNoRebootFlag:function(b){var c=b.get(0);c.rebootFlag=false},setCurrent:function(c,d){var c=c||this,e=d[1];var b=c.find("div.process-flow-step[name='"+e+"']");b.addClass("current");b.prev("span.bar").addClass("processed");c.find("div.form-container div.form-step").css("display","none");c.find("div.form-container div.form-step[name='"+e+"']").fadeIn(200)},setProcessed:function(c,d){var c=c||this,e=d[1];var b=c.find("div.process-flow-step[name='"+e+"']");b.addClass("processed");b.prev("span.bar").addClass("processed")},setNormal:function(c,d){var c=c||this,e=d[1];var b=c.find("div.process-flow-step[name='"+e+"']");b.removeClass("current, processed");b.prev("span.bar").removeClass("current, processed")},setNormalAll:function(b,c){b.find("div.process-flow-step, span.bar").removeClass("current processed")},goNext:function(){var l=l||this,d=l.get(0),k=d.items,i=k.length,j=d.currentIndex,e=j+1;a(d).find("button.wizard-btn.btn-next").attr("disabled",true);var b=setTimeout(function(){a(d).find("button.wizard-btn.btn-next").removeAttr("disabled")},500);var n=k[j]["name"],c=k[e]["name"];l.trigger("ev_nextValidate",k[j]["content"]);if(true==d.isInvalid){d.isInvalid=false;return}l.trigger("ev_goTo",c);if(true==d.isSummaryInvalid){d.isSummaryInvalid=false;return}l.find("div.buttons-container div.back-button-container").css("display","inline-block");if(j===i-1){l.find("div.buttons-container div.back-button-container").css("display","none");l.find("div.buttons-container div.next-button-container").css("display","none");l.find("div.buttons-container div.save-button-container").css("display","none");l.find("div.buttons-container div.reboot-button-container").css("display","none");l.find("div.buttons-container div.finish-button-container").css("display","none")}else{if(j===i-2){l.find("div.buttons-container div.next-button-container").css("display","none");l.find("div.buttons-container div.save-button-container").css("display","none");l.find("div.buttons-container div.reboot-button-container").css("display","none");l.find("div.buttons-container div.finish-button-container").css("display","none");return false}else{if(j===i-3){l.find("div.buttons-container div.next-button-container").css("display","none");l.find("div.buttons-container div.save-button-container").css("display","none");l.find("div.buttons-container div.reboot-button-container").css("display","none");l.find("div.buttons-container div.finish-button-container").css("display","inline-block")}else{if(j===i-4){l.find("div.buttons-container div.next-button-container").css("display","none");l.find("div.buttons-container div.save-button-container").css("display","inline-block");l.find("div.buttons-container div.reboot-button-container").css("display","none");l.find("div.buttons-container div.finish-button-container").css("display","none")}}}}var h=l.find("div.process-flow-step[name='"+n+"']").removeClass("current").addClass("processed"),g=h.next("span.bar"),f=g.find("span.bar-inner");var m=l.find("div.process-flow-step[name='"+c+"']");f.width(0);g.addClass("processed");f.animate({width:"+=100%"},200,function(){f.css("width","100%");m.addClass("current");l.find("div.form-container div.form-step").css("display","none");l.find("div.form-container div.form-step[name='"+c+"']").fadeIn(200)});d.currentIndex=e},goBack:function(){var k=k||this,e=k.get(0),j=e.items,h=j.length,i=e.currentIndex,b=i-1;var m=j[i]["name"];var l;if(i>0){l=j[b]["name"]}k.trigger("ev_goTo",l);if(true==e.isSummaryInvalid){e.isSummaryInvalid=false;return}a(e).find("button.wizard-btn.btn-next").removeAttr("disabled");if(i===0){return false}else{if(i===h-1){k.find("div.buttons-container div.back-button-container").css("display","none");k.find("div.buttons-container div.next-button-container").css("display","none");k.find("div.buttons-container div.save-button-container").css("display","none");k.find("div.buttons-container div.reboot-button-container").css("display","none");k.find("div.buttons-container div.finish-button-container").css("display","none")}else{if(i===h-2){k.find("div.buttons-container div.next-button-container").css("display","none");k.find("div.buttons-container div.save-button-container").css("display","inline-block");k.find("div.buttons-container div.reboot-button-container").css("display","none");k.find("div.buttons-container div.finish-button-container").css("display","none")}else{if(i===h-3){k.find("div.buttons-container div.next-button-container").css("display","inline-block");k.find("div.buttons-container div.save-button-container").css("display","none");k.find("div.buttons-container div.reboot-button-container").css("display","none");k.find("div.buttons-container div.finish-button-container").css("display","none")}}}}var g=k.find("div.process-flow-step[name='"+m+"']").removeClass("current processed"),d=g.prev("span.bar"),c=d.find("span.bar-inner");var f=k.find("div.process-flow-step[name='"+l+"']");c.css("width","100%");d.addClass("processed");c.animate({width:"-=0"},200,function(){d.removeClass("processed");c.css("width","100%");f.removeClass("processed").addClass("current");g.removeClass("current processed");k.find("div.form-container div.form-step").css("display","none");k.find("div.form-container div.form-step[name='"+l+"']").fadeIn(200)});e.currentIndex=b},goFinish:function(){var b=b||this,c=b.get(0);if(c.finishHandler){c.finishHandler.call(b)}},goSave:function(){var b=b||this,c=b.get(0);if(c.saveHandler){c.saveHandler.call(b)}},goReboot:function(){var b=b||this,c=b.get(0);if(c.rebootHandler){c.rebootHandler.call(b)}},goTo:function(i,c){var i=i||this,j=c[1];var d=i.get(0),g=d.items,f=d.currentIndex;i.wizard("setNormalAll");var h=false;for(var e=0;e<g.length;e++){var k=g[e],b=k.name;if(b==j){i.wizard("setCurrent",b);f=e;h=true;break}else{i.wizard("setProcessed",b);continue}}if(true==d.isSummaryInvalid){d.isSummaryInvalid=false;return}if(h){if(f===0){i.find("div.buttons-container div.next-button-container").css("display","inline-block");i.find("div.buttons-container div.save-button-container").css("display","none");i.find("div.buttons-container div.reboot-button-container").css("display","none");i.find("div.buttons-container div.finish-button-container").css("display","none")}else{if(f===g.length-1){i.find("div.buttons-container div.back-button-container").css("display","none");i.find("div.buttons-container div.next-button-container").css("display","none");i.find("div.buttons-container div.save-button-container").css("display","none");i.find("div.buttons-container div.reboot-button-container").css("display","none");i.find("div.buttons-container div.finish-button-container").css("display","none")}else{if(f===g.length-2){i.find("div.buttons-container div.next-button-container").css("display","none");i.find("div.buttons-container div.save-button-container").css("display","none");i.find("div.buttons-container div.reboot-button-container").css("display","none");i.find("div.buttons-container div.finish-button-container").css("display","inline-block")}else{if(f===g.length-3){i.find("div.buttons-container div.next-button-container").css("display","none");i.find("div.buttons-container div.save-button-container").css("display","inline-block");i.find("div.buttons-container div.reboot-button-container").css("display","none");i.find("div.buttons-container div.finish-button-container").css("display","none")}else{i.find("div.buttons-container div.next-button-container").css("display","inline-block");i.find("div.buttons-container div.save-button-container").css("display","none");i.find("div.buttons-container div.reboot-button-container").css("display","none");i.find("div.buttons-container div.finish-button-container").css("display","none")}}}}d.currentIndex=f;return true}else{console.error("Invalid Step Name or Index!");return false}},geToIndex:function(c,f){var c=c||this,d=f[1];var e=c.get(0),b=e.items,g=b[d].name;if(!g){console.error("Invalid Step Name or Index!");return false}else{return c.wizard("goTo",g)}},validateFailed:function(b){var b=b||this,c=b.get(0);c.isInvalid=true;return},validateSummaryFailed:function(b){var b=b||this,c=b.get(0);c.isSummaryInvalid=true;return}})})(jQuery);