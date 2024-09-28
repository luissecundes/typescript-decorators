function log(prefxo: string) {
  return (target: any) => {
    console.log(prefxo, target);
  };
}
@log("imprimir")
class Exemplo {}

export default {};
