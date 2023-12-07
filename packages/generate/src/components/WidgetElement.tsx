/**
 * File: /src/components/WidgetElement.tsx
 * Project: @react-gtk/generate
 * File Created: 06-12-2023 07:27:49
 * Author: Clay Risser
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
import reactAst from 'react-ast';
const { Class, ClassMethod } = reactAst;

export interface WidgetElementProps {
  name: string;
  extendedClass?: string;
}

export function WidgetElement({ name, extendedClass }: WidgetElementProps) {
  return (
    <Class name={name} extends={extendedClass}>
      <ClassMethod id="constructor" params={['a', 'b', 'c']} />
    </Class>
  );
}
