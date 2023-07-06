"use strict";
var DesignColor;
(function (DesignColor) {
    DesignColor["white"] = "#FFFFFF";
    DesignColor["black"] = "#000000";
    DesignColor["green"] = "#00FF00";
    DesignColor["blue"] = "#0000FF";
})(DesignColor || (DesignColor = {}));
var StatusUser;
(function (StatusUser) {
    StatusUser[StatusUser["inativo"] = 0] = "inativo";
    StatusUser[StatusUser["suspenso"] = 1] = "suspenso";
    StatusUser[StatusUser["ativo"] = 2] = "ativo";
})(StatusUser || (StatusUser = {}));
console.log(StatusUser.inativo);
console.log(StatusUser.ativo);
console.log(StatusUser.suspenso);
