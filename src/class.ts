
function setAPIversion (apiVersion: string) {
    return (constructor: any) => {
        return class extends constructor {
            
        }
        
    }
}
@setAPIversion('1.0.0')
class API {}

export default {};
