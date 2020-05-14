export function fetchUgrad() {
	const data = [
		{
			name: 'CSE-410-Computer-Graphics',
			description: 'Use of OpenGL, implementing how functions of OpenGL works using matrices and implementing a given scene with the concepts of ray tracing.',
			gitURL: 'https://github.com/lsiddiqsunny/CSE410-Computer-Graphics-Sessional',
			tech: ['C', 'C++', 'OpenGL', 'Ray Tracing'],
		},

		{
			name: 'CSE-406-Computer-Security',
			description: 'Transposition cipher and  DES were implemented. Also buffer overflow, XSS and CSRF attacks were performed.',
			gitURL: 'https://github.com/lsiddiqsunny/CSE406-Computer-Security-Sessional',
			tech: ['C++', 'Python'],
		},

		{
			name: 'CSE-322-Computer-Networks',
			description: 'Use of SMTP and HTTP protocol, DVR implementation, RDT simulation, error correction using CRC checksum were implemented. Also experimented with NS2.',
			gitURL: 'https://github.com/lsiddiqsunny/CSE-322-Computer-Networks-Sessional',
			tech: ['C', 'C++', 'Tcl', 'Shell', 'NS2'],
		},

		{
			name: 'CSE-318-Artificial-Intelligence',
			description: 'TSP, n-puzzle problem, missionary and cannibal problem, mancala game and csp were implemented.',
			gitURL: 'https://github.com/lsiddiqsunny/CSE-318-Artificial-Intelligence-Sessional',
			tech: ['C', 'C++', 'Python'],
		},

		{
			name: 'CSE-314-Operating-System',
			description: 'Basic shell programming, Pthreads, Semaphores and Mutex were done. xv6 was selected to experiment with. Adding system calls, implementing socket api and paging for xv6 were done',
			gitURL: 'https://github.com/lsiddiqsunny/CSE-314-Operating-System-Sessional',
			tech: ['C', 'C++', 'Python', 'xv6', 'Shell'],
		},


		{
			name: 'C Compiler',
			description: 'A subset of the gcc compiler. It was made through four iterations. First a data structure called symbolTable was made, using lex a code was tokenized, using yacc the grammer was written and finally converted into 8086-assembly code.',
			gitURL: 'https://github.com/lsiddiqsunny/C-compiler',
			tech: ['C', 'C++', 'Yacc', 'Lex', 'Shell'],
		},
		{
			name: 'CSE-314-Operating-System',
			description: 'A 4 bit PC, floating point adder and ALU were iimplemented.',
			gitURL: 'https://github.com/lsiddiqsunny/CSE-306-Computer-Architecture-Sessional',
			tech: ['C', 'C++', 'Python', 'xv6', 'Shell'],
		},

		
		{
			name: 'CSE-300-Technical-Writing-and-Presentation',
			description: 'LaTex was taught, also basics of techincal writings and presentation were taught.',
			gitURL: 'https://github.com/lsiddiqsunny/CSE-300-Technical-Writing-and-Presentation',
			tech: ['LaTex'],
		},

		{
			name: 'CSE-316-Microprocessors-Microcontrollers-and-Embedded-Systems',
			description: 'Assembly language for intel 8086 microprocessor were taught. Also ATMega32 were used to experiment.',
			gitURL: 'https://github.com/lsiddiqsunny/CSE-316-Microprocessors-Microcontrollers-and-Embedded-Systems-Sesssional',
			tech: ['Assembly', 'C', 'C++', 'ATMega32'],
		},


		{
			name: 'CSE-215-Database',
			description: 'SQL for Oracle were taught',
			gitURL: 'https://github.com/lsiddiqsunny/Database',
			tech: ['PLSQL', 'Oracle-11g'],
		},

		{
			name: 'Object-Oriented-Programming',
			description: 'OOP were tought',
			gitURL: 'https://github.com/lsiddiqsunny/Object-Oriented-Programming',
			tech: ['C++', 'Java'],
		},
	];

	return data;
}