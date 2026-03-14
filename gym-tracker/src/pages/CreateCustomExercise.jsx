import React, { useState, useRef, useEffect } from 'react';
import { Search, Image as ImageIcon, X, Plus, Dumbbell, ChevronDown } from 'lucide-react';

const CreateCustomExercise = () => {
  const [exerciseName, setExerciseName] = useState('');
  const [mainMuscle, setMainMuscle] = useState('');
  const [secondaryMuscles, setSecondaryMuscles] = useState([]);
  const [muscleSearch, setMuscleSearch] = useState('');
  const [showMuscleList, setShowMuscleList] = useState(false);

  const allMuscles = [
    "Abductors", "Adductors", "Biceps", "Calves", "Chest", "Forearms", 
    "Glutes", "Hamstrings", "Lats", "Lower Back", "Middle Back", 
    "Quadriceps", "Quads", "Rear Delts", "Shoulders", "Traps", "Triceps"
  ];

  const filteredMuscles = allMuscles.filter(m => 
    m.toLowerCase().includes(muscleSearch.toLowerCase())
  );

  const toggleSecondaryMuscle = (muscle) => {
    setSecondaryMuscles(prev => 
      prev.includes(muscle) ? prev.filter(m => m !== muscle) : [...prev, muscle]
    );
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 p-4 font-inter">
      <div className="max-w-xl mx-auto space-y-8">
        
        <header>
          <h1 className="text-2xl font-bold">New <span className="text-accent">Exercise</span></h1>
          <p className="text-zinc-500 text-sm">Define your custom movement details.</p>
        </header>

        <div className="space-y-6">
          {/* Exercise Name */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Name</label>
            <input 
              type="text"
              placeholder="e.g. Archer Pushups"
              className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl py-4 px-4 outline-none focus:border-accent/50 transition-all"
            />
          </div>

          {/* Main Muscle - Searchable Input */}
          <div className="space-y-2 relative">
            <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Main Muscle Group</label>
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input 
                type="text"
                value={mainMuscle || muscleSearch}
                onChange={(e) => {
                    setMuscleSearch(e.target.value);
                    setMainMuscle('');
                    setShowMuscleList(true);
                }}
                onFocus={() => setShowMuscleList(true)}
                placeholder="Search muscle group..."
                className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-accent/50 transition-all"
              />
            </div>
            
            {showMuscleList && (
              <div className="absolute top-full left-0 w-full mt-2 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl z-50 max-h-48 overflow-y-auto p-2 custom-scrollbar">
                {filteredMuscles.map(m => (
                  <button 
                    key={m}
                    onClick={() => {
                      setMainMuscle(m);
                      setMuscleSearch('');
                      setShowMuscleList(false);
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-zinc-800 rounded-xl transition-colors text-sm"
                  >
                    {m}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Secondary Muscles - Multi-select Tags */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Secondary Muscles</label>
            <div className="flex flex-wrap gap-2 p-1">
              {["Triceps", "Abs", "Core", "Traps", "Forearms"].map(m => (
                <button
                  key={m}
                  onClick={() => toggleSecondaryMuscle(m)}
                  className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${
                    secondaryMuscles.includes(m)
                      ? "bg-accent text-black border-accent"
                      : "bg-transparent border-zinc-800 text-zinc-500 hover:border-zinc-600"
                  }`}
                >
                  {m}
                </button>
              ))}
              <button className="px-4 py-2 rounded-full text-xs font-medium border border-dashed border-zinc-700 text-zinc-500 flex items-center gap-1">
                <Plus size={14} /> More
              </button>
            </div>
          </div>

          {/* Equipment & Instructions (Simplified for this view) */}
          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Equipment</label>
                <input type="text" placeholder="Barbell" className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl py-3 px-4 outline-none text-sm"/>
             </div>
             <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Category</label>
                <input type="text" placeholder="Strength" className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl py-3 px-4 outline-none text-sm"/>
             </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Instructions</label>
            <textarea rows="3" className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl py-4 px-4 outline-none focus:border-accent/50 resize-none text-sm"></textarea>
          </div>

          {/* Action */}
          <button className="w-full bg-accent text-black font-bold py-4 rounded-2xl shadow-lg shadow-accent/10 hover:opacity-90 active:scale-[0.99] transition-all">
            Save Exercise
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCustomExercise;