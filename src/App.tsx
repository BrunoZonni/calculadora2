import React, { useState } from 'react';

function ShippingCalculator() {
  const [valueUSD, setValueUSD] = useState('');
  const [weight, setWeight] = useState('');
  const [shippingMethod, setShippingMethod] = useState('');
  const [cost, setCost] = useState(0);
  const [showCosts, setShowCosts] = useState(false);

  function handleFormSubmit(event) {
    event.preventDefault();
    const seguro = 1 * parseFloat(shippingMethod);
    const valueCost = seguro * parseFloat(valueUSD);
    const weightCost = 5 * parseFloat(weight);
    const shippingCost = (1 + seguro) * parseFloat(valueUSD) + parseFloat(shippingMethod) + weightCost;
    setCost(shippingCost.toFixed(2));
    setShowCosts(true);
  }

  return (
    <div>
      <h1>Calculadora de envíos</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Valor en USD:
          <input type="number" value={valueUSD} onChange={(event) => setValueUSD(event.target.value)} />
        </label>
        <label>
          Peso en KG:
          <input type="number" value={weight} onChange={(event) => setWeight(event.target.value)} />
        </label>
        <label>
          Categoria:
          <select value={shippingMethod} onChange={(event) => setShippingMethod(event.target.value)}>
            <option value="0.05">Accesorio de buceo (5% del valor)</option>
            <option value="0.1">Accesorio de computacion (10% del valor)</option>
            <option value="0.15">Perifericos (15% del valor)</option>
            <option value="0.2">Smartphone (20% del valor)</option>
            <option value="0.25">Notebook (25% del valor)</option>
          </select>
        </label>
        <button type="submit">Calcular costo de envío</button>
      </form>
      {showCosts && <ShippingCost cost={cost} valueUSD={valueUSD} shippingMethod={shippingMethod} weight={weight} />}
    </div>
  );
}

function ShippingCost(props) {
  const { valueUSD, shippingMethod, weight } = props;
  const seguro = 0.01 * parseFloat(valueUSD);
  const valueCost = seguro;
  const weightCost = 5 * parseFloat(weight);
  const baseCost = parseFloat(shippingMethod) * parseFloat(valueUSD);
  const totalCost = (baseCost + valueCost + weightCost).toFixed(2);

  return (
    <div>
      <h2>Costo de envío:</h2>
      <ul>
        <li>Impuesto: ${baseCost.toFixed(2)}</li>
        <li>Seguro internacional 1%: ${valueCost.toFixed(2)}</li>
        <li>Flete: ${weightCost.toFixed(2)}</li>
        <li>Total: ${totalCost}</li>
      </ul>
    </div>
  );
}

export default ShippingCalculator;