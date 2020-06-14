import { connect } from 'react-redux'
import Import from '../components/Import'
import { fetchMakes } from "../redux/actions"
import { deleteMake } from '../redux/actions'


const mapStateToProps = (state) => {
    return {
        makes: state.makes,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMakes: () => dispatch(fetchMakes()),
        deleteMake: (make) => dispatch(deleteMake(make)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Import)