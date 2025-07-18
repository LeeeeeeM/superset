/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { action } from '@storybook/addon-actions';
import { Icons } from '@superset-ui/core/components/Icons';
import { Dropdown } from '../Dropdown';
import { FaveStar } from '../FaveStar';
import { ListViewCard } from '.';

export default {
  title: 'Components/ListViewCard',
  component: ListViewCard,
  argTypes: {
    loading: { control: 'boolean', defaultValue: false },
    imgURL: {
      control: 'text',
      defaultValue:
        'https://images.unsplash.com/photo-1658163724548-29ef00812a54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
    imgFallbackURL: {
      control: 'text',
      defaultValue:
        'https://images.unsplash.com/photo-1658208193219-e859d9771912?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
    isStarred: { control: 'boolean', defaultValue: false },
  },
};

export const SupersetListViewCard = ({
  loading,
  imgURL,
  imgFallbackURL,
  isStarred,
}: {
  loading: boolean;
  imgURL: string;
  imgFallbackURL: string;
  isStarred: boolean;
}) => (
  <ListViewCard
    title="Superset Card Title"
    loading={loading}
    url="/superset/dashboard/births/"
    imgURL={imgURL}
    imgFallbackURL={imgFallbackURL}
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
    coverLeft="Left Section"
    coverRight="Right Section"
    actions={
      <ListViewCard.Actions>
        <FaveStar
          itemId={0}
          fetchFaveStar={action('fetchFaveStar')}
          saveFaveStar={action('saveFaveStar')}
          isStarred={isStarred}
        />
        <Dropdown
          menu={{
            items: [
              {
                key: 'delete',
                label: 'Delete',
                icon: <Icons.DeleteOutlined />,
                onClick: action('Delete'),
              },
              {
                key: 'edit',
                label: 'Edit',
                icon: <Icons.EditOutlined />,
                onClick: action('Edit'),
              },
            ],
          }}
        >
          <Icons.EllipsisOutlined />
        </Dropdown>
      </ListViewCard.Actions>
    }
  />
);
