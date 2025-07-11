// components/ColorPalettePicker.jsx
import React, { useState } from "react";

const colorPalette = {
  primary: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
  },
  accent: {
    100: "#fef3c7",
    500: "#f59e0b",
    700: "#b45309",
  },
  neutral: {
    50: "#f9fafb",
    100: "#f5f5f4",
    300: "#d4d4d4",
    500: "#737373",
    700: "#404040",
    900: "#171717",
  },
  status: {
    success: "#22c55e",
    warning: "#eab308",
    error: "#ef4444",
    info: "#3b82f6",
  },
};

export default function ColorPalettePicker() {
  const [selectedColor, setSelectedColor] = useState({ label: "", hex: "" });

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">🎨 Select a Theme Color</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(colorPalette).map(([group, shades]) => (
          <div key={group}>
            <h3 className="text-lg font-bold capitalize mb-2">{group}</h3>
            <div className="flex flex-wrap gap-2">
              {Object.entries(shades).map(([shade, hex]) => (
                <button
                  key={shade}
                  onClick={() => setSelectedColor({ label: `${group}-${shade}`, hex })}
                  className="w-10 h-10 rounded border"
                  style={{ backgroundColor: hex }}
                  title={`${group}-${shade}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 border rounded-lg bg-white shadow">
        <p className="font-medium">Selected Color:</p>
        {selectedColor.hex ? (
          <div className="mt-2 flex items-center gap-4">
            <div
              className="w-16 h-16 rounded border"
              style={{ backgroundColor: selectedColor.hex }}
            ></div>
            <div>
              <p className="font-mono">{selectedColor.label}</p>
              <p className="font-mono text-sm text-gray-500">{selectedColor.hex}</p>
            </div>
          </div>
        ) : (
          <p className="text-gray-500 mt-2">No color selected.</p>
        )}
      </div>
    </div>
  );
}