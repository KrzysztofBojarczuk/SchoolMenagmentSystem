﻿using SchoolMenagmentSystem.Server.Models;

namespace SchoolMenagmentSystem.Server.Abstraction
{
    public interface ISchoolRepository
    {
        Task<List<School>> GetAllSchoolAsync(string searchTerm);
        Task<School> GetSchoolbyIdAsync(int schoolId);
        Task<School> CreateSchoolAsync(School school);
        Task<School> UpdateSchoolAsync(School updateSchool);
        Task<School> DeleteSchooldAsync(int schoolId);
    }
}
