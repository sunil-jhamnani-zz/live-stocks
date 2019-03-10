const colors = {
  increased: '#2A7652',
  decreased: '#F84234'
};

const generateTagColor = status => colors[status];

export default generateTagColor;
