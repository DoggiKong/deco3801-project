import * as React from 'react';
import { Header, Label, Button, Icon, Input, Table } from 'semantic-ui-react';
import ProcessStore from '../ProcessStore';
import { observer } from 'mobx-react';

@observer
export default class Upload extends React.Component {

    onChangeSingleFile = (e) => {
        console.log(e.target.files);
        ProcessStore.updateSelectedFiles(e.target.files);
        ProcessStore.updateProperty('isSingleFile', true);
    }

    onChangeMultipleFile = (e) => {
        console.log(e.target.files);
        ProcessStore.updateSelectedFiles(e.target.files);
        ProcessStore.updateProperty('isSingleFile', false);
    }

    render() {


        const { selectedFiles } = ProcessStore;
        const keys = Object.keys(selectedFiles);
        var files = [];
        keys.forEach(key => {
            files.push(selectedFiles[key]);
        });

        return (
            <div>

                <Header> Uploading Stage </Header>

                {/* Form to select files */}
                <div >
                    <div className='d-inline-block'>
                        <Label
                            as="label" htmlFor="singleFile" size="big">
                            <Icon name='file text' size='big' />
                            Upload Single File
                        </Label>
                        <input
                            id="singleFile" hidden type="file"
                            onChange={this.onChangeSingleFile}
                        />
                    </div>

                    <div className='d-inline-block'>
                        <Label
                            as="label" htmlFor="multipleFile" size="big">
                            <Icon name='file text' size='big' />
                            Upload Multiple File
                        </Label>
                        <input
                            id="multipleFile" hidden type="file" multiple
                            onChange={this.onChangeMultipleFile}
                        />
                    </div>
                </div>

                {/* Table to display currently selected files */}
                <div>
                    <Header as='h3'> Currently Selected Files </Header>

                    <Table celled singleLine>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.HeaderCell>Size</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {files.map((file, index) => {
                                return (
                                    <Table.Row key={index}>
                                        <Table.Cell> {file['name']} </Table.Cell>
                                        <Table.Cell> {file['size']} </Table.Cell>
                                    </Table.Row>
                                )
                            })}
                        </Table.Body>
                    </Table>
                </div>

            </div>
        )
    }
}
