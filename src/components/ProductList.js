import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';

class ProductList extends PureComponent {
  static propTypes = {
    onDelete: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
  };

  render() {
    const { onDelete, products } = this.props;
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
    }, {
      title: 'Actions',
      render: (text, record) => {
        return (
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <Button>Delete 2</Button>
          </Popconfirm>
        );
      },
    }];
    return (
      <Table
        dataSource={products}
        columns={columns}
      />
    );
  }
};

export default ProductList;
