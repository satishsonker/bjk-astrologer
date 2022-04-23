export const apiUrls= {
    "userController": {
        "addUser": "user/addUser",
        "getUser": "user/getUser",        
        "getUsers": "user/getUsers",
        "getUserPermission":"user/GetUserPermission",
        "updateUser": "user/updateUser",
        "deleteUser": "user/deleteUser",
        "resetPassword": "user/resetPassword",
        "searchUser": "user/searchUser",        
        "toggleBlockUser": "user/toggleBlockUser",
        "toggleLockUser": "user/toggleLockUser"
    },
    "firebaseTokenController": {
        "addFirebaseToken": "firebaseToken/addFirebaseToken",
        "getFirebaseToken": "firebaseToken/getFirebaseToken",        
        "getFirebaseTokens": "firebaseToken/getFirebaseTokens",
        "updateFirebaseToken": "firebaseToken/updateFirebaseToken",
        "deleteFirebaseToken": "firebaseToken/deleteFirebaseToken",
        "searchFirebaseToken": "firebaseToken/searchFirebaseToken"
    },
    "userPermissionController": {
        "addUserPermission": "userPermission/addUserPermission",
        "getUserPermission": "userPermission/getUserPermission",        
        "getUserPermissions": "userPermission/getUserPermissions",
        "usdateUserPermission": "userPermission/updateUserPermission",
        "deleteUserPermission": "userPermission/deleteUserPermission",
        "searchUserPermission": "userPermission/searchUserPermission"
    },
    "subscribeController": {
        "addSubscribe": "subscribe/addSubscribe",
        "getSubscribeById": "subscribe/getSubscribeById",         
        "getSubscribeByEmail": "subscribe/getSubscribeByEmail",        
        "getSubscribes": "subscribe/getSubscribes",
        "usdateSubscribe": "subscribe/updateSubscribe",
        "deleteSubscribe": "subscribe/deleteSubscribe",
        "searchSubscribe": "subscribe/searchSubscribe",
        "getUnsubscribeReason":"subscribe/getUnsubscribeReason"
    },
    "masterCollectionController": {
        "addMasterCollection": "masterCollection/addMasterCollection",
        "getMasterCollectionById": "masterCollection/getMasterCollectionById",         
        "getByCollectionName": "masterCollection/getByCollectionName",        
        "getMasterCollections": "masterCollection/getMasterCollections",
        "usdateMasterCollection": "masterCollection/updateMasterCollection",
        "deleteMasterCollection": "masterCollection/deleteMasterCollection",
        "searchMasterCollection": "masterCollection/searchMasterCollection",
        "deleteByCollectionName":"masterCollection/deleteByCollectionName"
    }
}