
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/_Game/Script/BGScroll');
require('./assets/_Game/Script/Bullet');
require('./assets/_Game/Script/CacheComponent');
require('./assets/_Game/Script/Character');
require('./assets/_Game/Script/Enemy');
require('./assets/_Game/Script/Manager/CollisionManager');
require('./assets/_Game/Script/Manager/LevelManager');
require('./assets/_Game/Script/Manager/SoundManager');
require('./assets/_Game/Script/Manager/UIManager');
require('./assets/_Game/Script/Pool/PoolControl');
require('./assets/_Game/Script/Pool/PoolMember');
require('./assets/_Game/Script/Pool/SimplePool');
require('./assets/_Game/Script/PowerUp');
require('./assets/_Game/Script/Ship');
require('./assets/_Game/Script/Utilities');
require('./assets/_Game/Script/VFX');
require('./assets/_Game/Script/ccExtension');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();