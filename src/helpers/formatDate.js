import moment from 'moment'

const formatDate = date =>
  moment(date).format('DD MMMM Y');

export default formatDate;