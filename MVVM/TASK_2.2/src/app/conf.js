const env = __ENV__.toUpperCase();

const baseObj = {
    app: __APP__,
    version: __VERSION__,
    title: "hahaniu平台"
};

/**
 * 开发用的测试环境。
 */
function dev() {


    const devPort = "16300";              //开发端口
    const apiPort = "14400";              //api端口，支付默认api端口

    /////////////////////////////////这是分割线
    let domain = "//kingsilk.net";
    let apiPath = domain + `/platform/rs/local/${apiPort}/api`;

    return Object.assign(baseObj, {
        apiPath: apiPath,
    });
}

/**
 * 开发用的测试环境。
 */
function test12() {

    const devPort = "11300";              //开发端口
    const apiPort = "11300";              //api端口
    /////////////////////////////////这是分割线
    let domain = "//kingsilk.net";        //
    let apiPath = domain + `/supplier/rs/local/${apiPort}/api`;

    return Object.assign(baseObj, {
        apiPath: apiPath,
    });
}

/**
 *  线上环境。
 */
function prod() {
    let domain = "//kingsilk.net";
    let apiPath = domain + `/platform/rs/api`;

    return Object.assign(baseObj, {
        domain: domain,
        apiPath: apiPath,
    });
}


function appConfigFactory() {

    let appConfig = null;

    if (env === "TEST12") {
        appConfig = test12();
    } else if (env === "PROD") {
        appConfig = prod();
    } else {
        appConfig = dev();
    }

    return appConfig;
}

export default appConfigFactory();
