/*
 * @Description: error msg define
 * @version: 1.0.0
 * @Author: zyj
 * @Date: 2020-07-30 01:44:12
 * @LastEditors: zyj
 * @LastEditTime: 2020-07-30 10:58:41
 */

module.exports={
/***
 * @code Description
 * including: it includes 3 number like 100.
 * first number: the error object like user,map
 * second number: operator error like login,register
 * third number:  error detail like not found ,pass error
 * ***/
  USER:{
    LOGIN:{
      LOGIN_SUCCESS :{
        msg: 'user login success',
        code: 100
      },
      PARAM_INVALIDE:{
        msg: 'user login error : invalid param in your data',
        code: 101
      },
      USERNAME_NOT_FOUND:{
        msg: 'user login error :username not be found in db',
        code: 102
      },
      PASSWORD_ERROR:{
        msg: 'user login error:password is not correct',
        code: 103
      },
    },
    REGISTER:{
      REGISTER_SUCCESS :{
        msg: 'user register success',
        code: 110
      },
      PARAM_INVALIDE:{
        msg: 'user register error : invalid param in your data',
        code: 111
      },
      USERNAME_EXIST: {
           msg: 'user register error:user has exited ',
           code: 112
      },

    }

  },
  UGV:{
    LOAD_ALL:{
      LOAD_SUCCESS:{
        msg: 'ugv default and user records load success',
        code: 200
      },
      LOAD_USER_FAILE:{
        msg: 'ugv  user records load failed',
        code: 201
      },
      LOAD_DEFUALT_FAIL:{
        msg: 'ugv default  record load failed',
        code: 202
      },
      LOAD_FAIL:{
        msg: 'ugv default and user records load failed',
        code: 203
      }
    },
    LOAD_DEFAULT:{
      LOAD_SUCCESS:{
        msg: 'ugv default  record load success',
        code: 210
      },
      LOAD_FAILED:{
        msg: 'ugv  default records load failed',
        code: 211
      },
    },
    LOAD_USER:{
      LOAD_SUCCESS:{
        msg: 'ugv user record load success',
        code: 220
      },
      LOAD_FAILED:{
        msg: 'ugv  user records load failed',
        code: 221
      },
    }
  },
  MAP:{
    LOAD:{
      LOAD_SUCCESS:{
        msg: 'load map success : load map success',
        code: 300
      },
      NOT_FOUND:{
        msg: 'load map error : there has been one map  ',
        code: 301
      },
      MAP_OWNED:{
        msg: 'load map error : there has been one map  ',
        code: 302
      },
      MAP_LOADED:{
        msg: 'load map error : this map has been loaded ',
        code: 303
      }

    }
  }

}
