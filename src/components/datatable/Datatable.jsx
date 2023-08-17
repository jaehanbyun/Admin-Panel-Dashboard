import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesource';

const Datatable = () => {
    const actionColumns = [{
        field: "action", headerName: "Action", width: 200, renderCell: () => {
            return (
                <div className='cellAction'>
                    <div className='viewButton'>View</div>
                    <div className='deleteButton'>Delete</div>
                </div>
            )
        }
    }];

    return (
        <div className='datatable'>
            <DataGrid
                rows={userRows}
                columns={userColumns.concat(actionColumns)}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 9 },
                    },
                }}
                checkboxSelection
            />
        </div>
    )
}

export default Datatable
