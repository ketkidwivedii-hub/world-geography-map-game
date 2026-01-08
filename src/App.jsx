import { GameProvider } from "./context/GameContext";
import WorldMap from "./components/WorldMap";
import UIOverlay from "./components/UIOverlay";

export default function App() {
  return (
    <GameProvider>
      <WorldMap />
      <UIOverlay />
    </GameProvider>
  );
}
