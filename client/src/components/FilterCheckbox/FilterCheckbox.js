import { CheckboxContainer } from './style'

function FilterCheckbox () {
    return (
      <CheckboxContainer>
        <h4>AÇÕES COMERCIAIS</h4>
        <ul>
          <li><input type="checkbox"/> EM PROMOÇÃO</li>
          <li><input type="checkbox"/> EM OFERTA</li>
        </ul>

        <h4>ESTOQUE</h4>
        <ul>
          <li><input type="checkbox"/> ESTOQUE DISPONÍVEL</li>
        </ul>

        <h4>CATEGORIAS</h4>
        <ul>
          <li><input type="checkbox"/> GENÉRICOS</li>
          <li><input type="checkbox"/> SIMILARES</li>
          <li><input type="checkbox"/> PSICOTRÓPICOS</li>
          <li><input type="checkbox"/> HIGIENE E BELEZA</li>
        </ul>
      </CheckboxContainer>
    )
  }
  
  export default FilterCheckbox
