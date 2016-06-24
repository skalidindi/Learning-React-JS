import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const average = (data) => _.round(_.sum(data) / data.length);

const Chart = (props) => (
  <div>
    <Sparklines height={120} width={180} data={props.data}>
      <SparklinesLine color={props.color} />
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
    <div>{average(props.data)} {props.units}</div>
  </div>
);

Chart.propTypes = {
  data: React.PropTypes.array,
  units: React.PropTypes.string,
  color: React.PropTypes.string,
};

export default Chart;
