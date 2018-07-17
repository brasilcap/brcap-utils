const aws = require('brcap-aws');
const Promise = require('bluebird');

async function getPropertiesS3(bucket, keys) {
    const results = [];
    for (let i = 0; i < keys.length; i += 1) {
        const result = await Promise.promisify(aws.S3_Get)(bucket, keys[i].valor);
        results[keys[i].chave] = JSON.parse(result.Body);
    }
    return results;
}

module.exports = {
    getPropertiesS3,
};