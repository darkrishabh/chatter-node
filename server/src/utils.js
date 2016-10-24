/**
 * Created by hangvirus on 23/10/16.
 */
const Utils = {
    makeResponse: function(success=false, reason="", data={}){
        return {
            success: success,
            reason: reason,
            data: data
        }
    }
};

module.exports = Utils;