import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";
import React from "react";

const Text = () => {
    const { windows } = useWindowStore();
    const data = windows.txtfile?.data;

    if (!data) return null;

    const { name, image, subtitle, description } = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="txtfile" />
                <h2>{name}</h2>
            </div>

            <div className="bg-white flex flex-col h-full overflow-auto p-6 gap-4">
                {image && (
                    <img src={image} alt={name} className="max-w-full h-auto" />
                )}

                {subtitle && (
                    <h3 className="text-lg font-semibold">{subtitle}</h3>
                )}

                {description && Array.isArray(description) && (
                    <div className="space-y-4">
                        {description.map((paragraph, index) => (
                            <p key={index} className="text-sm leading-relaxed">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
