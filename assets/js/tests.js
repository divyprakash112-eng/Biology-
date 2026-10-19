const tests = [
  { id: 1, title: "Test 01", date: "2026-10-20", type: "chapter", file: "tests/test-01.html", description: "Cell: The Unit of Life", phase: "Phase 1" },
  { id: 2, title: "Test 02", date: "2026-10-23", type: "chapter", file: "tests/test-02.html", description: "Cell Cycle and Cell Division", phase: "Phase 1" },
  { id: 3, title: "Test 03", date: "2026-10-26", type: "chapter", file: "tests/test-03.html", description: "The Living World", phase: "Phase 1" },
  { id: 4, title: "Test 04", date: "2026-10-29", type: "chapter", file: "tests/test-04.html", description: "Biological Classification", phase: "Phase 1" },

  { id: 5, title: "Test 05", date: "2026-11-01", type: "chapter", file: "tests/test-05.html", description: "Plant Kingdom", phase: "Phase 1" },
  { id: 6, title: "Test 06", date: "2026-11-04", type: "chapter", file: "tests/test-06.html", description: "Morphology of Flowering Plants", phase: "Phase 1" },
  { id: 7, title: "Test 07", date: "2026-11-07", type: "chapter", file: "tests/test-07.html", description: "Anatomy of Flowering Plants", phase: "Phase 1" },
  { id: 8, title: "Test 08", date: "2026-11-10", type: "chapter", file: "tests/test-08.html", description: "Respiration in Plants", phase: "Phase 1" },
  { id: 9, title: "Test 09", date: "2026-11-13", type: "chapter", file: "tests/test-09.html", description: "Photosynthesis in Higher Plants", phase: "Phase 1" },
  { id: 10, title: "Test 10", date: "2026-11-16", type: "chapter", file: "tests/test-10.html", description: "Plant Growth and Development", phase: "Phase 1" },
  { id: 11, title: "Test 11", date: "2026-11-19", type: "chapter", file: "tests/test-11.html", description: "Sexual Reproduction in Flowering Plants", phase: "Phase 1" },
  { id: 12, title: "Test 12", date: "2026-11-22", type: "chapter", file: "tests/test-12.html", description: "Molecular Basis of Inheritance", phase: "Phase 1" },

  { id: 13, title: "Test 13", date: "2026-11-25", type: "mixed", file: "tests/test-13.html", description: "Mixed Test 1 — Chapters 1–12: Cumulative Practice", phase: "Phase 1" },
  { id: 14, title: "Test 14", date: "2026-11-29", type: "mixed", file: "tests/test-14.html", description: "Mixed Test 2 — Chapters 1–12: Cumulative Revision", phase: "Phase 1" },

  { id: 15, title: "Test 15", date: "2026-12-02", type: "chapter", file: "tests/test-15.html", description: "Principles of Inheritance and Variation", phase: "Phase 1" },
  { id: 16, title: "Test 16", date: "2026-12-05", type: "chapter", file: "tests/test-16.html", description: "Microbes in Human Welfare", phase: "Phase 1" },
  { id: 17, title: "Test 17", date: "2026-12-08", type: "chapter", file: "tests/test-17.html", description: "Organisms and Populations", phase: "Phase 1" },
  { id: 18, title: "Test 18", date: "2026-12-11", type: "chapter", file: "tests/test-18.html", description: "Ecosystem", phase: "Phase 1" },
  { id: 19, title: "Test 19", date: "2026-12-14", type: "chapter", file: "tests/test-19.html", description: "Biodiversity and Conservation", phase: "Phase 1" },
  { id: 20, title: "Test 20", date: "2026-12-17", type: "chapter", file: "tests/test-20.html", description: "Structural Organisation in Animals", phase: "Phase 1" },
  { id: 21, title: "Test 21", date: "2026-12-20", type: "chapter", file: "tests/test-21.html", description: "Breathing and Exchange of Gases", phase: "Phase 1" },
  { id: 22, title: "Test 22", date: "2026-12-23", type: "chapter", file: "tests/test-22.html", description: "Body Fluids and Circulation", phase: "Phase 1" },

  { id: 23, title: "Test 23", date: "2026-12-26", type: "mixed", file: "tests/test-23.html", description: "Mixed Test 3 — Chapters 1–20: Cumulative Practice", phase: "Phase 1" },
  { id: 24, title: "Test 24", date: "2026-12-30", type: "mixed", file: "tests/test-24.html", description: "Mixed Test 4 — Chapters 1–20: Cumulative Revision", phase: "Phase 1" },

  { id: 25, title: "Test 25", date: "2027-01-02", type: "chapter", file: "tests/test-25.html", description: "Excretory Products and their Elimination", phase: "Phase 1" },
  { id: 26, title: "Test 26", date: "2027-01-05", type: "chapter", file: "tests/test-26.html", description: "Locomotion and Movement", phase: "Phase 1" },
  { id: 27, title: "Test 27", date: "2027-01-08", type: "chapter", file: "tests/test-27.html", description: "Neural Control and Coordination", phase: "Phase 1" },
  { id: 28, title: "Test 28", date: "2027-01-11", type: "chapter", file: "tests/test-28.html", description: "Chemical Coordination and Integration", phase: "Phase 1" },
  { id: 29, title: "Test 29", date: "2027-01-14", type: "chapter", file: "tests/test-29.html", description: "Animal Kingdom", phase: "Phase 1" },
  { id: 30, title: "Test 30", date: "2027-01-17", type: "chapter", file: "tests/test-30.html", description: "Biomolecules", phase: "Phase 1" },
  { id: 31, title: "Test 31", date: "2027-01-20", type: "chapter", file: "tests/test-31.html", description: "Human Reproduction", phase: "Phase 1" },
  { id: 32, title: "Test 32", date: "2027-01-23", type: "chapter", file: "tests/test-32.html", description: "Reproductive Health", phase: "Phase 1" },

  { id: 33, title: "Test 33", date: "2027-01-26", type: "mixed", file: "tests/test-33.html", description: "Mixed Test 5 — Chapters 1–28: Cumulative Practice", phase: "Phase 1" },
  { id: 34, title: "Test 34", date: "2027-01-30", type: "mixed", file: "tests/test-34.html", description: "Mixed Test 6 — Chapters 1–28: Cumulative Revision", phase: "Phase 1" },

  { id: 35, title: "Test 35", date: "2027-02-02", type: "chapter", file: "tests/test-35.html", description: "Human Health and Disease", phase: "Phase 1" },
  { id: 36, title: "Test 36", date: "2027-02-08", type: "chapter", file: "tests/test-36.html", description: "Biotechnology: Principles and Processes", phase: "Phase 1" },
  { id: 37, title: "Test 37", date: "2027-02-14", type: "chapter", file: "tests/test-37.html", description: "Biotechnology and its Applications", phase: "Phase 1" },
  { id: 38, title: "Test 38", date: "2027-02-20", type: "chapter", file: "tests/test-38.html", description: "Evolution", phase: "Phase 1" },

  { id: 39, title: "Test 39", date: "2027-02-24", type: "mixed", file: "tests/test-39.html", description: "Mixed Test 7 — All 32 Chapters: Comprehensive Practice", phase: "Phase 1" },
  { id: 40, title: "Test 40", date: "2027-02-28", type: "mixed", file: "tests/test-40.html", description: "Mixed Test 8 — All 32 Chapters: Final Revision & Weak-Topic Practice", phase: "Phase 1" },

  { id: 41, title: "Test 41", date: "2027-03-07", type: "full", file: "tests/test-41.html", description: "Full Syllabus Biology Mock 1 — Complete Biology Syllabus", phase: "Phase 2" },
  { id: 42, title: "Test 42", date: "2027-03-14", type: "full", file: "tests/test-42.html", description: "Full Syllabus Biology Mock 2 — Complete Biology Syllabus", phase: "Phase 2" },
  { id: 43, title: "Test 43", date: "2027-03-21", type: "full", file: "tests/test-43.html", description: "Full Syllabus Biology Mock 3 — Complete Biology Syllabus", phase: "Phase 2" },
  { id: 44, title: "Test 44", date: "2027-03-28", type: "full", file: "tests/test-44.html", description: "Full Syllabus Biology Mock 4 — Complete Biology Syllabus", phase: "Phase 2" },

  { id: 45, title: "Test 45", date: "2027-04-04", type: "full", file: "tests/test-45.html", description: "Full Syllabus Biology Mock 5 — Complete Biology Syllabus", phase: "Phase 2" },
  { id: 46, title: "Test 46", date: "2027-04-10", type: "full", file: "tests/test-46.html", description: "Full Syllabus Biology Mock 6 — Complete Biology Syllabus", phase: "Phase 2" },
  { id: 47, title: "Test 47", date: "2027-04-16", type: "full", file: "tests/test-47.html", description: "Full Syllabus Biology Mock 7 — Complete Biology Syllabus", phase: "Phase 2" },
  { id: 48, title: "Test 48", date: "2027-04-21", type: "full", file: "tests/test-48.html", description: "Full Syllabus Biology Mock 8 — Complete Biology Syllabus", phase: "Phase 2" },
  { id: 49, title: "Test 49", date: "2027-04-26", type: "full", file: "tests/test-49.html", description: "Full Syllabus Biology Mock 9 — Complete Biology Syllabus", phase: "Phase 2" },
  { id: 50, title: "Test 50", date: "2027-04-30", type: "full", file: "tests/test-50.html", description: "Final Full Syllabus Biology Mock — Complete Biology Syllabus", phase: "Phase 2" }
];

function getTestById(id) {
  return tests.find(test => test.id === Number(id)) || null;
}
