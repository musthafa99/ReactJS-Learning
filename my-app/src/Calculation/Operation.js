import Big from "big.js";

export default function Operation(firstnumber,secondnumber,symbol)
{
    const one = Big(firstnumber || "0");
  const two = Big(secondnumber || (symbol === "÷" || symbol === 'x' ? "1": "0"));
    if(symbol === "+")
    {
        return one.plus(two).toString();
    }
    if(symbol === "-")
    {
        return one.minus(two).toString();
    }
    if(symbol === "x")
    {
        return one.times(two).toString();
    }
    if (symbol === "÷") {
        if (two === "0") {
          alert("Divide by 0 error");
          return "0";
        } else {
          return one.div(two).toString();
        }
      }
      throw Error(`Unknown operation '${symbol}'`);
}