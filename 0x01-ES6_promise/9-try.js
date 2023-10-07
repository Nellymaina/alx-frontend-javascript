export default function guardrail(mathFunction){
  let queue=[];
  let value=mathFunction();
  queue.push(value);
 queue.push("Guardrail was processed");
  return queue;
}
