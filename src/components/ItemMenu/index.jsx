import PropTypes from 'prop-types';
import arrow from '../../assets/arrow-down.svg';
import { MenuItem } from './styles';

function ItemMenu({ name }) {
  return (
    <MenuItem>
      <span>{name}</span>
      <img src={arrow} alt="Flecha para baixo" />
    </MenuItem>
  );
}

ItemMenu.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ItemMenu;
