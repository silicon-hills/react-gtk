/**
 * File: /src/components/SearchBarDemo/index.tsx
 * Project: @react-gtk/test-example
 * File Created: 30-12-2023 10:14:00
 * Author: K S R PHANI BHUSHAN
 * -----
 * BitSpur (c) Copyright 2017 - 2023
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { Box, ColorButton } from '@react-gtk/core';
import Gtk from '@girs/node-gtk-4.0';

export const SearchBarDemo = () => {
  return (
    <Box valign={Gtk.Align.CENTER} halign={Gtk.Align.CENTER}>
      <Box>
        <ColorButton style={{ width: 70 }} tooltipText="please select the color" />
      </Box>
    </Box>
  );
};

export default SearchBarDemo;
