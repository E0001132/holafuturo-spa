import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
import { ContainerStateProps } from '@adobe/aem-spa-component-mapping';

// 1. Interfaz de Propiedades del Contenido
interface DemoContentProps {
    title: string;
    message?: string; 
    ctaLink: string;
    imagen?: string; 
    unidades?: number; 
}

// 2. Interfaz Completa
interface DemoProps extends DemoContentProps, ContainerStateProps {}

// 3. Componente React Funcional
const Demo: React.FC<DemoProps> = (props) => {

    return (
        <div className="cmp-demo">
            Componente DEMO !!!
            
        </div>
    );
};

// 4. Mapeo a AEM 
MapTo('holafuturospa/components/demo')(Demo);

export default Demo;